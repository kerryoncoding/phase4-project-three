"""new join table - squadUsers

Revision ID: 5ef2caa13cd5
Revises: 7d8409bc65b9
Create Date: 2024-03-28 08:43:18.384135

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5ef2caa13cd5'
down_revision = '7d8409bc65b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('squadusers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('squad_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['squad_id'], ['squads.id'], name=op.f('fk_squadusers_squad_id_squads')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_squadusers_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_squadusers'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('squadusers')
    # ### end Alembic commands ###