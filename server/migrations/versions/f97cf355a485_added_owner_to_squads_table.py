"""added owner to squads table

Revision ID: f97cf355a485
Revises: df81cdb397b4
Create Date: 2024-05-07 18:30:49.333960

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f97cf355a485'
down_revision = 'df81cdb397b4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('squads', schema=None) as batch_op:
        batch_op.add_column(sa.Column('owner', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_squads_owner_users'), 'users', ['owner'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('squads', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_squads_owner_users'), type_='foreignkey')
        batch_op.drop_column('owner')

    # ### end Alembic commands ###
