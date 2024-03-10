"""initial db

Revision ID: 010c9767b6f9
Revises: 
Create Date: 2024-03-10 11:06:33.011974

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '010c9767b6f9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('squads',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id')
   )


def downgrade():
    pass
