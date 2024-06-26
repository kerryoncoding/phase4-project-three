"""updated squaduser table column from liked to membership

Revision ID: df81cdb397b4
Revises: c180046911d8
Create Date: 2024-03-31 10:08:13.438644

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df81cdb397b4'
down_revision = 'c180046911d8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('squadusers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('membership', sa.Boolean(), nullable=True))
        batch_op.drop_column('liked')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('squadusers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('liked', sa.BOOLEAN(), nullable=True))
        batch_op.drop_column('membership')

    # ### end Alembic commands ###
